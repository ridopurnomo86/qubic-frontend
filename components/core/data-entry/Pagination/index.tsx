import {
  Pagination as CorePagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationPropsType = {
  className?: string;
  onPrevious: () => void;
  onNext: () => void;
};

const Pagination = ({ className, onPrevious, onNext }: PaginationPropsType) => (
  <CorePagination className={className}>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious onClick={onPrevious} />
      </PaginationItem>
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
