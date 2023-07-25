import React from "react";
import * as S from "./style";
import Arrow from '../../img/arrow.svg';
import { PaginationType } from "../../types/pagination";

const Pagination: React.FC<PaginationType> = ({
    currentPage,
    totalPages,
    maxButtons,
    onPageChange,
}) => {
    const getPageButtons = (): React.ReactNode[] => {
        const pageButtons = [];
        const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
        const endPage = Math.min(totalPages, startPage + maxButtons - 1);
        for (let i = startPage; i <= endPage; i++) {
            pageButtons.push(
                <S.ButtonNumberPage
                    key={i}
                    onClick={() => goToPage(i)}
                    className={currentPage === i ? "active" : ""}
                >
                    {i}
                </S.ButtonNumberPage>
            );
        }
        return pageButtons;
    };

    const nextPage = () => {
        onPageChange(currentPage + 1);
    };

    const goToPage = (pageNumber: number) => {
        onPageChange(pageNumber);
    };

    return (
        <S.Pagination>

            {getPageButtons()}
            <S.ButtonNextPage onClick={nextPage} disabled={currentPage === totalPages}>
                Próximo <img src={Arrow} alt="Próxima Página" />
            </S.ButtonNextPage>
        </S.Pagination>
    );
};

export default Pagination;
