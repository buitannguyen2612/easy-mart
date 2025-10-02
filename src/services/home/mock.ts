import { HttpStatusCode } from "axios";
import { productList } from "./mock.data";
import { axiosMockAdapter } from "@/axios-config-instance";

// Of the code HttpStatusCode we need to define the enum for calling this one
axiosMockAdapter.onGet("getallproduct").reply(HttpStatusCode.Ok, productList);
