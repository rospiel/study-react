import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { TableInstance } from "react-table";
import { nonNull } from "rospiel-react_alganews-sdk/dist/utils/objectUtil";
import NoData from "../NoData/NoData";
import * as T from './Table.styles';

interface TableProps<T extends object> {
  instance: TableInstance<T>
  onPaginate?: (newPage: number) => any
}

export default function Table<T extends Object> ({ instance, onPaginate }: TableProps<T>) {
  
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    rows, 
    /* PAGINATION */
    pageCount, 
    gotoPage, 
    state: {
      pageIndex,
    }
  } = instance

  useEffect(() => {
    nonNull(onPaginate) && onPaginate!(pageIndex)
  }, [pageIndex, onPaginate])

  return (
    <>
      <T.Wrapper cellPadding={0} cellSpacing={0} { ...getTableProps() } >
        <T.Heading>
          {
            headerGroups.map(headerGroup => (
              <T.HeadingRow { ...headerGroup.getHeaderGroupProps() }>
                {
                  headerGroup.headers.map(column => (
                    <T.HeadingCell { ...column.getHeaderProps() }>
                      { column.render('Header') }
                    </T.HeadingCell>
                  ))
                }
                
              </T.HeadingRow>
            ))
          }
        </T.Heading>
        
        <T.Body { ...getTableBodyProps() }>
          {
            rows.map(row => {
              prepareRow(row)
              return (
                <T.BodyRow { ...row.getRowProps() }>
                  {
                    row.cells.map(cell => {
                      return (
                        <T.BodyCell { ...cell.getCellProps() }>
                          { cell.render('Cell') }
                        </T.BodyCell>
                      )
                    })
                  }
                </T.BodyRow>
              )
            })
          }
        </T.Body>
      </T.Wrapper>
      { !rows.length && 
        <T.BodyWithoutData>
          <NoData height={360} />
        </T.BodyWithoutData>
      }

      <T.TablePagination>
        <ReactPaginate pageCount={pageCount} onPageChange={page => gotoPage(page.selected)} marginPagesDisplayed={0} pageRangeDisplayed={3} nextLabel={<Icon path={mdiChevronRight} size={"16px"} />} previousLabel={<Icon path={mdiChevronLeft} size={"16px"} />} />
      </T.TablePagination>
    </>
  )
}