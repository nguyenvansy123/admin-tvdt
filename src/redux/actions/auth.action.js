import { authConstants } from "./constants"
import axios from "../../helpers/axios"
import { toast } from 'react-toastify';


export const signup = (user, navigate) => {
  return async dispatch => {

    dispatch({ type: authConstants.SIGNUP_REQUEST })
    const res = await axios.post("/signup", user, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
      }
      ).then((res) => {
      if (res.status === 201) {

        dispatch({ type: authConstants.SIGNUP_SUCCESS })

        // const { token, user } = res.data
        // localStorage.setItem("token", token);
        // localStorage.setItem("user", JSON.stringify(user));

        // dispatch({
        //   type: authConstants.LOGIN_SUCCESS,
        // payload: {
        //   token,
        //   user
        // }
        // })

        toast.success(res.data.message)
        navigate("/login")

      }
    }).catch((_error) => {
      console.log(_error)
      dispatch({ type: authConstants.SIGNUP_FAILURE, payload: _error.response.data.message });
      toast.error(_error.response.data.message)
      console.log(_error);
    })


  }
}

// export const login = (user, ToggleLogin) => {
//   return async (dispatch) => {
//     try {
//       // Dispatch action yêu cầu đăng nhập
//       dispatch({ type: authConstants.LOGIN_REQUEST });

//       // Thực hiện yêu cầu POST đến máy chủ
//       const res = await axios.post(`admin/signin`, user).then(

//       );
//       if (res.status === 200) {
//         // Nếu thành công, trích xuất token và dữ liệu người dùng
//         const { token, user } = res.data;

//         // Lưu token và dữ liệu người dùng vào local storage
//         localStorage.setItem("token", token);
//         localStorage.setItem("user", JSON.stringify(user));

//         // Dispatch action đăng nhập thành công
//         dispatch({
//           type: authConstants.LOGIN_SUCCESS,
//           payload: {
//             token,
//             user,
//           },
//         });

//         // Gọi hàm ToggleLogin (giả sử đây là hàm để chuyển đổi trạng thái đăng nhập)
//         ToggleLogin();
//       } else if (res.status === 400) {
//         // Nếu máy chủ phản hồi với mã trạng thái 400, dispatch action đăng nhập thất bại
//         dispatch({
//           type: authConstants.LOGIN_FAILURE,
//           payload: { error: res.data.error },
//         });
//       }
//       // Kiểm tra trạng thái của phản hồi

//     } catch (error) {
//       // Xử lý bất kỳ lỗi nào xảy ra trong quá trình bất đồng bộ (ví dụ: lỗi mạng)
//       console.error("Lỗi trong quá trình đăng nhập:", error);
//     }
//   };
// };

export const login = (user, navigate) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGIN_REQUEST });

    axios.post(`/admin/signin`, user)
      .then((res) => {
        if (res.status === 200) {
          const { token, user } = res.data;
          localStorage.setItem("token", token);
          localStorage.setItem("user", JSON.stringify(user));

          dispatch({
            type: authConstants.LOGIN_SUCCESS,
            payload: {
              token,
              user,
            },
          });
          navigate("/")
          toast.success("đăng nhập thành công")
        }
      })
      .catch((error) => {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: { error: error.response.data },
        });
        toast.error(error.response.data.message)
      });
  };
};

export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed to login" },
      });
    }
  };
};


export const signout = (navigate) => {
  return async (dispatch) => {
    dispatch({ type: authConstants.LOGOUT_REQUEST });
    const res = await axios.post(`/admin/signout`);
    if (res.status === 200) {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.clear();
      dispatch({ type: authConstants.LOGOUT_SUCCESS });
      toast.success("đăng xuất thành công")
      navigate("/login")
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: { error: res.data.error }
      });
    }
  };
};

// export const getAllUsers = () => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.get("/user");
//       if (res.status === 200) {
//         const users = res.data;
//         dispatch({
//           type: authConstants.GET_ALL_USERS_SUCCESS,
//           payload: users,
//         });
//       }
//     } catch (error) {
//       dispatch({
//         type: authConstants.GET_ALL_USERS_FAILURE,
//         payload: { error },
//       });
//     }
//   };
// };
