export interface PaginationType {
  currentPage: number;
  totalPages: number;
  maxButtons: number;
  onPageChange: (pageNumber: number) => void;
}
