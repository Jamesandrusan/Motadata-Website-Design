"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  /** When true, omits the outer max-w container. Use inside a column layout. */
  compact?: boolean;
}

export function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
  compact = false,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const buttons = (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-[13px]"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Previous
      </Button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={page === currentPage ? "default" : "outline"}
          size="sm"
          onClick={() => onPageChange(page)}
          className="h-9 w-9 p-0 text-[13px]"
        >
          {page}
        </Button>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-[13px]"
      >
        Next
        <ChevronRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );

  if (compact) return buttons;

  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-12">
      {buttons}
    </div>
  );
}
