// "use client";
// import useSWR from "swr";
// import axios from "@/lib/axios";
// import { useEffect } from "react";
// import { useParams, useRouter } from "next/navigation";

// // Define types for the function parameters
// interface UseAuthOptions {
//   middleware?: "auth" | "guest";
//   redirectIfAuthenticated?: string;
// }

// interface AuthResponse {
//   data: any; // Replace 'any' with the actual user data type
//   errors?: Record<string, string[]>; // Field-specific errors
// }

// export const useAuth = ({
//   middleware,
//   redirectIfAuthenticated,
// }: UseAuthOptions = {}) => {
//   const router = useRouter();
//   const params = useParams();

//   const {
//     data: user,
//     error,
//     mutate,
//   } = useSWR<AuthResponse>("/api/user", () =>
//     axios
//       .get("/api/user")
//       .then((res) => res.data)
//       .catch((err) => {
//         if (err.response?.status !== 409) throw err;
//         router.push("/verify-email");
//       })
//   );

//   const csrf = () => axios.get("/sanctum/csrf-cookie");

//   const register = async ({ setErrors, ...props }: Record<string, any>) => {
//     await csrf();

//     setErrors([]);

//     try {
//       await axios.post("/register", props);
//       mutate();
//     } catch (err: any) {
//       if (err.response?.status === 422) {
//         setErrors(err.response.data.errors);
//       } else {
//         throw err;
//       }
//     }
//   };

//   const login = async ({
//     setErrors,
//     setStatus,
//     ...props
//   }: Record<string, any>) => {
//     await csrf();

//     setErrors([]);
//     setStatus(null);

//     try {
//       await axios.post("/login", props);
//       mutate();
//     } catch (err: any) {
//       if (err.response?.status === 422) {
//         setErrors(err.response.data.errors);
//       } else {
//         throw err;
//       }
//     }
//   };

//   const forgotPassword = async ({
//     setErrors,
//     setStatus,
//     email,
//   }: Record<string, any>) => {
//     await csrf();

//     setErrors([]);
//     setStatus(null);

//     try {
//       const response = await axios.post("/forgot-password", { email });
//       setStatus(response.data.status);
//     } catch (err: any) {
//       if (err.response?.status === 422) {
//         setErrors(err.response.data.errors);
//       } else {
//         throw err;
//       }
//     }
//   };

//   const resetPassword = async ({
//     setErrors,
//     setStatus,
//     ...props
//   }: Record<string, any>) => {
//     await csrf();

//     setErrors([]);
//     setStatus(null);

//     try {
//       const response = await axios.post("/reset-password", {
//         token: params.token,
//         ...props,
//       });
//       router.push("/login?reset=" + btoa(response.data.status));
//     } catch (err: any) {
//       if (err.response?.status === 422) {
//         setErrors(err.response.data.errors);
//       } else {
//         throw err;
//       }
//     }
//   };

//   const resendEmailVerification = async ({
//     setStatus,
//   }: {
//     setStatus: (status: string) => void;
//   }) => {
//     const response = await axios.post("/email/verification-notification");
//     setStatus(response.data.status);
//   };

//   const logout = async () => {
//     if (!error) {
//       await axios.post("/logout").then(() => mutate());
//     }

//     router.push("/login");
//   };

//   useEffect(() => {
//     if (middleware === "guest" && redirectIfAuthenticated && user) {
//       router.push(redirectIfAuthenticated);
//     }

//     if (middleware === "auth" && error) {
//       logout();
//     }
//   }, [user, error]);

//   return {
//     user,
//     register,
//     login,
//     forgotPassword,
//     resetPassword,
//     resendEmailVerification,
//     logout,
//   };
// };
