import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  danhSachThuoc: [], 
  tongTien: 0,      
};
const hoaDonThuocSlice = createSlice({
  name: "hoaDonThuoc",
  initialState,
  reducers: {
    themThuoc: (state, action) => {
      const thuocMoi = action.payload;
      state.danhSachThuoc.push(thuocMoi);
      state.tongTien += thuocMoi.gia * thuocMoi.soLuong;
    },
    xoaThuoc: (state, action) => {
      const idThuoc = action.payload;
      const thuocBiXoa = state.danhSachThuoc.find((thuoc) => thuoc.id === idThuoc);
      if (thuocBiXoa) {
        state.tongTien -= thuocBiXoa.gia * thuocBiXoa.soLuong;
        state.danhSachThuoc = state.danhSachThuoc.filter((thuoc) => thuoc.id !== idThuoc);
      }
    },
    capNhatThuoc: (state, action) => {
      const { id, soLuongMoi } = action.payload;
      const thuocCanCapNhat = state.danhSachThuoc.find((thuoc) => thuoc.id === id);
      if (thuocCanCapNhat) {
        state.tongTien -= thuocCanCapNhat.gia * thuocCanCapNhat.soLuong;
        thuocCanCapNhat.soLuong = soLuongMoi;
        state.tongTien += thuocCanCapNhat.gia * thuocCanCapNhat.soLuong;
      }
    },
    resetHoaDon: (state) => {
      state.danhSachThuoc = [];
      state.tongTien = 0;
    },
  },
});
export const { themThuoc, xoaThuoc, capNhatThuoc, resetHoaDon } = hoaDonThuocSlice.actions;
export default hoaDonThuocSlice.reducer;