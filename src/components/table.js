import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import EditIcon from '@mui/icons-material/Edit';
import { visuallyHidden } from '@mui/utils';

function createData(
  id,
  tonKho,
  tongTrongLuong,
  categoryName,
  ngayTao,
  ngayXuLy,
  tenSanPham,
  note,
  skuSanPham,
  maVach,
  giaNiemYet,
  giaBan,
  trangThai,
  ttKinhDoanh,
  hoaHong,
  hoaHongPhanTram,
  nguoiTao,
  nguoiXuLy,
  sanPham,
  soNguyenLieu
) {
  return {
    id,
    tonKho,
    tongTrongLuong,
    categoryName,
    ngayTao,
    ngayXuLy,
    tenSanPham,
    note,
    skuSanPham,
    maVach,
    giaNiemYet,
    giaBan,
    trangThai,
    ttKinhDoanh,
    hoaHong,
    hoaHongPhanTram,
    nguoiTao,
    nguoiXuLy,
    sanPham,
    soNguyenLieu,
  };
}

const rows = [
  createData(1, 100, 50, 'Category A', '2024-11-04', '2024-11-05', 'Product A', 'Note A', 'SKU001', 'Barcode001', 100000, 95000, 'Available', 'Active', 5000, 5, 'User1', 'User2', 'Product Type A', 3),
  createData(2, 200, 100, 'Category B', '2024-11-04', '2024-11-05', 'Product B', 'Note B', 'SKU002', 'Barcode002', 150000, 140000, 'Out of Stock', 'Inactive', 10000, 7, 'User3', 'User4', 'Product Type B', 5),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  { id: 'tonKho', numeric: true, disablePadding: false, label: 'Tồn kho' },
  { id: 'tongTrongLuong', numeric: true, disablePadding: false, label: 'Tổng trọng lượng' },
  { id: 'categoryName', numeric: false, disablePadding: false, label: 'Danh mục sản phẩm' },
  { id: 'ngayTao', numeric: false, disablePadding: false, label: 'Ngày tạo' },
  { id: 'ngayXuLy', numeric: false, disablePadding: false, label: 'Ngày xử lý' },
  { id: 'tenSanPham', numeric: false, disablePadding: false, label: 'Tên sản phẩm' },
  { id: 'note', numeric: false, disablePadding: false, label: 'Ghi chú' },
  { id: 'skuSanPham', numeric: false, disablePadding: false, label: 'SKU sản phẩm' },
  { id: 'maVach', numeric: false, disablePadding: false, label: 'Mã vạch' },
  { id: 'giaNiemYet', numeric: true, disablePadding: false, label: 'Giá niêm yết' },
  { id: 'giaBan', numeric: true, disablePadding: false, label: 'Giá bán' },
  { id: 'trangThai', numeric: false, disablePadding: false, label: 'Trạng thái' },
  { id: 'ttKinhDoanh', numeric: false, disablePadding: false, label: 'TT kinh doanh' },
  { id: 'hoaHong', numeric: true, disablePadding: false, label: 'Hoa hồng (vnđ)' },
  { id: 'hoaHongPhanTram', numeric: true, disablePadding: false, label: 'Hoa hồng (%)' },
  { id: 'nguoiTao', numeric: false, disablePadding: false, label: 'Người tạo' },
  { id: 'nguoiXuLy', numeric: false, disablePadding: false, label: 'Người xử lý' },
  { id: 'sanPham', numeric: false, disablePadding: false, label: 'Sản phẩm' },
  { id: 'soNguyenLieu', numeric: true, disablePadding: false, label: 'Số nguyên liệu' },
  { id: 'actions', numeric: false, disablePadding: false, label: 'Actions' },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" sx={{ width: '240px' }}>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all products',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: '240px' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function TableProduct() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('tonKho');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      [...rows]
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Product Inventory
          </Typography>
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox" sx={{ width: '240px' }}>
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none" sx={{ width: '240px' }}>
                      {row.tenSanPham}
                    </TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.tonKho}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.tongTrongLuong}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.categoryName}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.ngayTao}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.ngayXuLy}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.note}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.skuSanPham}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.maVach}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.giaNiemYet}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.giaBan}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.trangThai}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.ttKinhDoanh}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.hoaHong}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.hoaHongPhanTram}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.nguoiTao}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.nguoiXuLy}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.sanPham}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>{row.soNguyenLieu}</TableCell>
                    <TableCell align="right" sx={{ width: '240px' }}>
                      <IconButton aria-label="edit">
                        <EditIcon />
                      </IconButton>
                      <IconButton aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={21} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
