import { getOrderByNumberApi, orderBurgerApi } from '@api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RequestStatus, TOrder } from '@utils-types';

interface OrderSlice {
  orderByNumber: TOrder | null;
  status: RequestStatus;
  orderModalData: TOrder | null;
  orderRequest: boolean;
}

const initialState: OrderSlice = {
  orderByNumber: null,
  status: RequestStatus.Idle,
  orderModalData: null,
  orderRequest: false
};

export const getOrder = createAsyncThunk('order/getOrder', orderBurgerApi);

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrder.fulfilled, (state, action) => {
      state.orderModalData = action.payload.order;
      state.orderRequest = true;
    });
    builder.addCase(getOrder.pending, (state) => {
      state.orderRequest = false;
    });
    builder.addCase(getOrder.rejected, (state) => {
      state.orderRequest = false;
    });
  },
  selectors: {
    orderSliceSelector: (state) => state,
    orderModal: (state) => state.orderModalData,
    orderByNumber: (state) => state.orderByNumber,
    orderRequest: (state) => state.orderRequest
  }
});

export const { orderSliceSelector, orderModal, orderByNumber, orderRequest } =
  orderSlice.selectors;
export default orderSlice;
