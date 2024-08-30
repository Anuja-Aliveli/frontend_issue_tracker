import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  Card,
  Box,
  TableSortLabel,
  TablePagination,
  TextField,
  InputAdornment,
  useTheme,
  Link,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  formatDateTime,
  getStatusBgColor,
  getStatusColor,
} from '../../utils/sharedFunctions';
import {
  ActionOptions,
  TableColumnData,
  TableComponentProps,
  TableRowData,
} from '../../Interfaces/sharedInterface';
import {
  TABLE_CELL_DATATIME,
  TABLE_CELL_LINK,
  TABLE_CELL_STATUS,
  TABLE_CELL_STRING,
  ASC,
  DESC,
  PAGINATION_OPTIONS,
  DARK_THEME,
  DARK_BORDER,
  LIGHT_BORDER,
  DARK_INPUT_BACKGROUND,
  LIGHT_INPUT_BACKGROUND,
  SIDEBAR_SELECTED_DARK_BG_COLOR,
  SIDEBAR_SELECTED_LIGHT_BG_COLOR,
  SIDEBAR_SELECTED_DARK_BORDER,
  SIDEBAR_SELECTED_LIGHT_BORDER,
  SIDEBAR_SELECTED_DARK_COLOR,
  SIDEBAR_SELECTED_LIGHT_COLOR,
  DARK_BG_COLOR,
  LIGHT_BG_COLOR,
} from '../../utils/constants';
import { visuallyHidden } from '@mui/utils';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

const TableComponent = (props: TableComponentProps) => {
  const {
    columnData = [],
    rowData = [],
    isSelection = false,
    onRowSelect,
    isAllRowSelected = false,
    onAllRows,
    isActionBtn = false,
    onActionClick,
    showSort = false,
    handleSort,
    showPagination = false,
    handlePagination,
    showSearch = false,
    handleSearch,
    handleRefresh,
  } = props;

  const theme = useTheme();
  const [currentRowData, setCurrentRowData] = useState<TableRowData[]>([]);
  const [isAllRows, setIsAllRows] = useState<boolean>(
    isAllRowSelected ?? false,
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentRow, setCurrentRow] = useState<TableRowData | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [sortField, setSortField] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [tableSearchInput, setTableSearchInput] = useState<string>('');

  useEffect(() => {
    setCurrentRowData(rowData);
    setIsAllRows(isAllRowSelected ?? false);
  }, [rowData, isAllRowSelected]);

  // Handle Row Selection
  const handleRowSelect = (isAllSelected: boolean, rowData?: TableRowData) => {
    if (isAllSelected) {
      const allSelected = !isAllRows;
      setIsAllRows(allSelected);
      const updatedRows = currentRowData.map((row) => ({
        ...row,
        checked: allSelected,
      }));
      setCurrentRowData(updatedRows);
      if (onAllRows) {
        onAllRows(updatedRows);
      }
    } else if (rowData) {
      const updatedRows = currentRowData.map((row) =>
        row.rowId === rowData.rowId ? { ...row, checked: !row.checked } : row,
      );
      setCurrentRowData(updatedRows);
      if (onRowSelect) {
        onRowSelect(rowData);
      }
    }
  };

  // Handle Action menu open
  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    row: TableRowData,
  ) => {
    setAnchorEl(event.currentTarget);
    setCurrentRow(row);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
    setCurrentRow(null);
  };

  // Handle Action click
  const handleActionClick = (action: ActionOptions) => {
    if (currentRow && onActionClick) {
      onActionClick(currentRow, action);
    }
    handleMenuClose();
  };

  // Handle Sort
  const onSort = (field: string) => {
    setSortField(field);
    const newSortDirection = sortDirection === ASC ? DESC : ASC;
    setSortDirection(newSortDirection);

    if (handleSort) {
      handleSort(field, newSortDirection);
    }
  };

  // Handle page change
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    if (handlePagination) {
      handlePagination(newPage + 1, limit);
    }
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newLimit = parseInt(event.target.value, 10);
    const newPage = 0;
    setLimit(newLimit);
    setPage(newPage);
    if (handlePagination) {
      handlePagination(newPage + 1, newLimit);
    }
  };

  // Handle Refresh
  const onRefresh = () => {
    if (handleRefresh) {
      setTableSearchInput('');
      setPage(0);
      setLimit(10);
      setSortField('');
      setSortDirection('desc');
      handleRefresh();
    }
  };

  // Handle Search
  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTableSearchInput(newValue);
    if (handleSearch) {
      handleSearch(newValue);
    }
  };

  // Helper function to generate unique keys for cells
  const uniqueKey = (rowId: string, fieldname: string) =>
    `${rowId}-${fieldname}`;

  // Cell type string
  const renderStringCell = (column: TableColumnData, row: TableRowData) => (
    <TableCell key={uniqueKey(row.rowId, column.fieldname)}>
      {row[column.fieldname]}
    </TableCell>
  );

  // Cell type Status
  const renderStatusCell = (column: TableColumnData, row: TableRowData) => (
    <TableCell key={uniqueKey(row.rowId, column.fieldname)}>
      <span
        className="status"
        style={{
          color: getStatusColor(row[column.fieldname]),
          backgroundColor:
            theme.palette.mode === DARK_THEME
              ? DARK_BG_COLOR
              : getStatusBgColor(row[column.fieldname]),
        }}>
        {row[column.fieldname]}
      </span>
    </TableCell>
  );

  // Cell type Date
  const renderDataTime = (column: TableColumnData, row: TableRowData) => (
    <TableCell key={uniqueKey(row.rowId, column.fieldname)}>
      {formatDateTime(row[column.fieldname])}
    </TableCell>
  );

  // Cell type Link
  const renderLinkCell = (column: TableColumnData, row: TableRowData) => (
    <TableCell key={uniqueKey(row.rowId, column.fieldname)}>
      <Link
        href={row.route_link[column.fieldname]}
        sx={{
          textDecoration: 'none',
          color:
            theme.palette.mode === DARK_THEME
              ? SIDEBAR_SELECTED_DARK_COLOR
              : SIDEBAR_SELECTED_LIGHT_COLOR,
        }}>
        {row[column.fieldname]}
      </Link>
    </TableCell>
  );

  const renderCellType = (column: TableColumnData, row: TableRowData) => {
    switch (column.fieldtype) {
      case TABLE_CELL_STRING:
        return renderStringCell(column, row);
      case TABLE_CELL_STATUS:
        return renderStatusCell(column, row);
      case TABLE_CELL_DATATIME:
        return renderDataTime(column, row);
      case TABLE_CELL_LINK:
        return renderLinkCell(column, row);
      default:
        return renderStringCell(column, row);
    }
  };

  // Render Table Header
  const renderTableHeader = () => {
    return (
      <TableHead>
        <TableRow>
          {isSelection && (
            <TableCell
              padding="checkbox"
              sx={{
                color:
                  theme.palette.mode === DARK_THEME
                    ? SIDEBAR_SELECTED_DARK_COLOR
                    : SIDEBAR_SELECTED_LIGHT_COLOR,
                backgroundColor:
                  theme.palette.mode === DARK_THEME
                    ? SIDEBAR_SELECTED_DARK_BG_COLOR
                    : SIDEBAR_SELECTED_LIGHT_BG_COLOR,
                borderBottom:
                  theme.palette.mode === DARK_THEME
                    ? SIDEBAR_SELECTED_DARK_BORDER
                    : SIDEBAR_SELECTED_LIGHT_BORDER,
              }}>
              <Checkbox
                checked={isAllRows}
                onChange={() => handleRowSelect(true)}
              />
            </TableCell>
          )}
          {columnData.map((column) => (
            <TableCell
              key={`header-${column.fieldname}`}
              sx={{
                color:
                  theme.palette.mode === DARK_THEME
                    ? SIDEBAR_SELECTED_DARK_COLOR
                    : SIDEBAR_SELECTED_LIGHT_COLOR,
                backgroundColor:
                  theme.palette.mode === DARK_THEME
                    ? SIDEBAR_SELECTED_DARK_BG_COLOR
                    : SIDEBAR_SELECTED_LIGHT_BG_COLOR,
                borderBottom:
                  theme.palette.mode === DARK_THEME
                    ? SIDEBAR_SELECTED_DARK_BORDER
                    : SIDEBAR_SELECTED_LIGHT_BORDER,
                cursor: 'pointer',
              }}
              sortDirection={
                sortField === column.fieldname ? sortDirection : false
              }>
              {!showSort && column.label}
              {showSort && (
                <TableSortLabel
                  active={sortField === column.fieldname}
                  direction={
                    sortField === column.fieldname ? sortDirection : ASC
                  }
                  onClick={() => onSort(column.fieldname)}>
                  {column.label}
                  {sortField === column.fieldname ? (
                    <Box component="span" sx={visuallyHidden}>
                      {sortDirection === DESC
                        ? 'sorted descending'
                        : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
          {isActionBtn && (
            <TableCell
              key={'Action'}
              sx={{
                color:
                  theme.palette.mode === DARK_THEME
                    ? SIDEBAR_SELECTED_DARK_COLOR
                    : SIDEBAR_SELECTED_LIGHT_COLOR,
                backgroundColor:
                  theme.palette.mode === DARK_THEME
                    ? SIDEBAR_SELECTED_DARK_BG_COLOR
                    : SIDEBAR_SELECTED_LIGHT_BG_COLOR,
                borderBottom:
                  theme.palette.mode === DARK_THEME
                    ? SIDEBAR_SELECTED_DARK_BORDER
                    : SIDEBAR_SELECTED_LIGHT_BORDER,
              }}>
              Actions
            </TableCell>
          )}
        </TableRow>
      </TableHead>
    );
  };

  // Render Table Body
  const renderTableBody = () => {
    return (
      <TableBody>
        {/* <Typography component="h1" variant="h3" sx={{ marginBottom: 2 }}>
          No Data
        </Typography> */}
        {currentRowData
          .slice(page * limit, page * limit + limit)
          .map((row, index) => (
            <TableRow key={`row-${index}`}>
              {isSelection && (
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={row.checked || false}
                    onChange={() => handleRowSelect(false, row)}
                  />
                </TableCell>
              )}
              {columnData.map((column) => renderCellType(column, row))}
              {isActionBtn && (
                <TableCell>
                  <IconButton
                    onClick={(e) => handleMenuOpen(e, row)}
                    size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
      </TableBody>
    );
  };

  // Render Table Pagination
  const renderPagination = () => {
    if (showPagination) {
      return (
        <TablePagination
          rowsPerPageOptions={PAGINATION_OPTIONS}
          component="div"
          count={currentRowData.length}
          rowsPerPage={limit}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      );
    }
    return null;
  };

  // Render Action Options
  const renderActionOptions = () => {
    if (isActionBtn) {
      return (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              backgroundColor:
                theme.palette.mode === DARK_THEME
                  ? DARK_BG_COLOR
                  : LIGHT_BG_COLOR,
            },
          }}>
          {currentRow &&
            currentRow.action_options.map(
              (actionItem: ActionOptions, actionIndex: number) => (
                <MenuItem
                  key={`action-${actionIndex}-${actionItem.actId}`}
                  onClick={() => handleActionClick(actionItem)}>
                  {actionItem.label}
                </MenuItem>
              ),
            )}
        </Menu>
      );
    }
    return null;
  };

  // Render Search
  const renderTableOptions = () => {
    if (showSearch) {
      return (
        <Box
          sx={{
            mb: 2,
            padding: '10px',
            display: 'flex',
            justifyContent: 'end',
          }}>
          <TextField
            id="searchInput"
            placeholder="Search..."
            variant="outlined"
            size="small"
            sx={{
              width: { xs: '100%', md: '280px' },
              height: '35px !important',
            }}
            value={tableSearchInput}
            onChange={onSearchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton color="primary" size="small">
                    <SearchIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              backgroundColor:
                theme.palette.mode === DARK_THEME
                  ? DARK_INPUT_BACKGROUND
                  : LIGHT_INPUT_BACKGROUND,
              borderRadius: '10px',
              marginLeft: '10px',
              border:
                theme.palette.mode === DARK_THEME ? DARK_BORDER : LIGHT_BORDER,
              height: '35px !important',
            }}
            onClick={onRefresh}>
            <IconButton color="primary" size="small">
              <RefreshIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      );
    }
    return null;
  };

  return (
    <>
      {renderTableOptions()}
      <TableContainer component={Card}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{ maxHeight: 440, overflow: 'scroll' }}>
          {renderTableHeader()}
          {renderTableBody()}
        </Table>
        {renderPagination()}
        {renderActionOptions()}
      </TableContainer>
    </>
  );
};

export default TableComponent;
