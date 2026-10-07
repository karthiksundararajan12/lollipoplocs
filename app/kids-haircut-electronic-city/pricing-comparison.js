'use client';

import { Check, Minus } from 'lucide-react';
import { PRICING_COMPARISON, formatInr } from '../../lib/site-config';

function CellValue({ value, column }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E2F6EC]">
          <Check className="h-4 w-4 text-[#17963f]" aria-hidden="true" />
        </span>
        <span className="sr-only">Included</span>
      </span>
    );
  }

  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center">
        <Minus className="h-5 w-5 text-[#9CA3AF]" aria-hidden="true" />
        <span className="sr-only">Not included</span>
      </span>
    );
  }

  if (typeof value === 'number') {
    if (column === 'Certificate' && value === PRICING_COMPARISON.rows.at(-1).firstHaircut) {
      return (
        <span className="text-sm font-bold text-[#4B2A8A]">
          +{formatInr(value)}
        </span>
      );
    }
    return (
      <span className="font-heading text-lg font-bold text-[#4B2A8A]">
        {formatInr(value)}
      </span>
    );
  }

  if (value && typeof value === 'object' && 'boys' in value) {
    return (
      <span className="text-sm font-bold leading-snug text-[#4B2A8A]">
        <span className="block">{formatInr(value.boys)}</span>
        <span className="text-muted block text-xs font-medium">/ {formatInr(value.girls)}</span>
      </span>
    );
  }

  return null;
}

export function PricingComparison() {
  const { columns, rows } = PRICING_COMPARISON;
  const columnKeys = ['boys', 'girls', 'firstHaircut'];

  return (
    <>
      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_4px_16px_rgb(26_26_46_/0.06)] md:block">
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b border-black/5 bg-[#F6F2FF]/60">
              <th scope="col" className="px-4 py-4 text-left text-sm font-bold text-[#1A1A2E]">
                What&apos;s included
              </th>
              {columns.map((col) => (
                <th
                  key={col}
                  scope="col"
                  className="px-4 py-4 text-sm font-bold text-[#4B2A8A]"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-black/5 last:border-0">
                <th
                  scope="row"
                  className="px-4 py-4 text-left text-sm font-semibold text-[#1A1A2E]"
                >
                  {row.label}
                </th>
                {columnKeys.map((key) => (
                  <td key={key} className="px-4 py-4">
                    <CellValue value={row[key]} column={row.label} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile accordion */}
      <div className="space-y-3 md:hidden">
        {columns.map((col, colIndex) => {
          const key = columnKeys[colIndex];
          const isFirstHaircut = key === 'firstHaircut';
          const title = isFirstHaircut ? 'First Haircut Certificate' : col;
          const visibleRows = isFirstHaircut
            ? rows.filter((row) => row.label === 'Certificate')
            : rows;
          return (
            <details
              key={col}
              className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_4px_16px_rgb(26_26_46_/0.06)]"
              open={colIndex === 2}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 font-bold text-[#4B2A8A] marker:hidden [&::-webkit-details-marker]:hidden">
                {title}
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFE0EC] text-xl leading-none"
                >
                  +
                </span>
              </summary>
              <ul className="border-t border-black/5 px-4 py-3">
                {visibleRows.map((row) => (
                  <li
                    key={row.label}
                    className="flex items-center justify-between gap-3 border-b border-black/5 py-3 last:border-0"
                  >
                    <span
                      className={`text-sm text-[#1A1A2E] ${
                        isFirstHaircut && row.label === 'Certificate'
                          ? 'font-bold'
                          : 'font-semibold'
                      }`}
                    >
                      {row.label}
                    </span>
                    <CellValue value={row[key]} column={row.label} />
                  </li>
                ))}
              </ul>
            </details>
          );
        })}
      </div>
    </>
  );
}
