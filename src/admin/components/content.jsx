import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DH from "./dh";
import DM from "./dm";
import SP from "./sp";
import ND from "./nd";
import Thongke from "./thongke";
import AddDM from "./adddm";
import SuaDM from "./suadm";

const Content = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Navigate to="/thongke" />} />
        <Route path="/thongke" exact element={<Thongke />} />
        <Route path="/tables-nd" element={<ND />} />
        <Route path="/tables-dm" element={<DM />} />
        <Route path="/tables-sp" element={<SP />} />
        <Route path="/tables-dh" element={<DH />} />
        <Route path="/adddm" element={<AddDM/>} />
        <Route path="/suadm/:id" element={<SuaDM/>} />

      </Routes>
    </>
  );
};

export default Content;
