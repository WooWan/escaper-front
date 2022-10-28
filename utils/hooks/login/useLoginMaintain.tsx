import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loginUser} from "../../../store/slices/user/user";
import {useQuery} from "@tanstack/react-query";
import {loginMember} from "../../../api/member";
import {IMember} from "../../../interfaces/member";
import {ApiResponse} from "../../../interfaces/apiResponse";

export default function useLoginMaintain() {

  const [cookies] = useCookies(["token"]);
  const {data} = useQuery<ApiResponse<IMember>>(["user"], loginMember);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cookies["token"] && data) {
      dispatch(loginUser(data?.result));
    }
  }, [cookies, dispatch, data]);
}