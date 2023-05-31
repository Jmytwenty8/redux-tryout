const { createSlice } = require("@reduxjs/toolkit");
const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const users = await response.data.map((user) => user.id);
  return users;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    users: [],
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
