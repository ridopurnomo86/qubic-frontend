import {
  Pagination as CorePagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationPropsType = {
  className?: string;
  onPrevious: () => void;
  onNext: () => void;
  pages: Array<number>;
  activePage: number;
};

const Pagination = ({
  className,
  onPrevious,
  onNext,
  pages,
  activePage,
}: PaginationPropsType) => (
  <CorePagination className={className}>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious onClick={onPrevious} />
      </PaginationItem>
      {pages.map((page) => (
        <PaginationItem key={page}>
          <PaginationLink href="" isActive={page === activePage}>
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext onClick={onNext} />
      </PaginationItem>
    </PaginationContent>
  </CorePagination>
);

export default Pagination;
