import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyHello from "./MyHello";
import EventBasic from "./EventBasic";
import StateBasic from "./StateBasic";
import ForList from "./ForList";
import books from "./books";
import ForNest from "./ForNest";
import ForFilter from "./ForFilter";
import ForSort from "./ForSort";
import SelectStyle from "./SelectStyle";
import StyledPanel from "./StyledPanel";
import TitledPanel from "./TitledPanel";
import ListTemplate from "./ListTemplate";
import TypeProp, { Member } from "./TypeProp";
import StateParent from "./StateParent";
import StateForm from "./chap04/StateForm";
import StateFormUC from "./chap04/StateFormUC";
import FormTextarea from "./chap04/FormTextarea";
import FormSelect from "./chap04/FormSelect";
import FormList from "./chap04/FormList";
import FormRadio from "./chap04/FormRadio";
import FormCheck from "./chap04/FormCheck";
import FormCheckMulti from "./chap04/FormCheckMulti";
import FormFile from "./chap04/FormFile";
import StateNest from "./chap04/StateNest";
import StateNestImmer from "./chap04/StateNestImmer";
import StateTodo from "./chap04/StateTodo";
import StateEffect from "./chap07/StateEffect";
import HookTimer from "./chap07/HookTimer";
import HookEffect from "./chap07/HookEffect";
import HookRefNg from "./chap07/HookRefNg";
import HookRef from "./chap07/HookRef";
import HookRefForward from "./chap07/HookRefForward";
import HookCallbackRef from "./chap07/HookCallbackRef";
import { RouterProvider } from "react-router-dom";
import routesBasic from "./chap08/routesBasic";
import routesLink from "./chap08/routesLink";
import RouterApp from "./chap08/RouterApp";
import routesParam from "./chap08/routesParam";
import routesHandle from "./chap08/routesHandle";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));

const title = <p>メンバー募集中！</p>;
const body = <p>ようこそ、WINGSプロジェクトへ！！</p>;
root.render(
  <>
    {/* <MyHello myName="鈴木" /> */}
    {/* <EventBasic /> */}
    {/* <StateBasic init={0} /> */}
    {/* <ForList src={books} /> */}
    {/* <ForNest src={books} /> */}
    {/* <ForFilter src={books} /> */}
    {/* <ForSort src={books} /> */}
    {/* <SelectStyle mode="dark" /> */}
    {/* <StyledPanel>
      <MyHello myName="鈴木" />
    </StyledPanel> */}
    {/* <TitledPanel>
      <p key="title">メンバー募集中！</p>
      <p key="body">ようこそ、WINGSプロジェクトへ！！</p>
    </TitledPanel> */}
    {/* render属性として描画関数を渡す */}
    {/* <ListTemplate
      src={books}
      render={(elem) => (
        <>
          <dt>
            <a
              href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}
            >
              {elem.title} ({elem.price}円)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </>
      )}
    /> */}
    {/* 正しい例 */}
    {/* <TypeProp prop1={new Member()} /> */}
    {/* 誤った例 */}
    {/* <TypeProp prop1="hoge" /> */}
    {/* 正しい例 */}
    {/* <TypeProp props2="男性" /> */}
    {/* 誤った例 */}
    {/* <TypeProp prop2="hoge" /> */}
    {/* 正しい例 */}
    {/* <TypeProp prop3="鈴木花子" /> */}
    {/* 誤った例 */}
    {/* <TypeProp prop3={new Member()} /> */}
    {/* 正しい例 */}
    {/* <TypeProp prop4={[15, 30]} /> */}
    {/* 誤った例 */}
    {/* <TypeProp prop4={[333, "鈴木花子"]} /> */}
    {/* 正しい例 */}
    {/* <TypeProp prop5={{ 鈴木花子: 15, 佐藤零: 30 }} /> */}
    {/* 誤った例 */}
    {/* <TypeProp prop5={{ 鈴木花子: 15, 佐藤零: "三十" }} /> */}
    {/* 正しい例 */}
    {/* <TypeProp prop6={{ name: "鈴木花子", age: 35, sex: "女性", blood: "A" }} /> */}
    {/* 誤った例 */}
    {/* <TypeProp prop6={{ age: 35, sex: "女性" }} /> */}
    {/* <StateParent /> */}
    {/* <StateForm /> */}
    {/* <StateFormUC /> */}
    {/* <FormTextarea /> */}
    {/* <FormSelect /> */}
    {/* <FormList /> */}
    {/* <FormRadio /> */}
    {/* <FormCheck /> */}
    {/* <FormCheckMulti /> */}
    {/* <FormFile /> */}
    {/* <StateNest /> */}
    {/* <StateNestImmer /> */}
    {/* <StateTodo /> */}

    {/* <StateEffect init={0} /> */}
    {/* <HookTimer init={10} /> */}
    {/* <HookEffect init={10} /> */}
    {/* <HookRefNg /> */}
    {/* <HookRef /> */}
    {/* <HookRefForward /> */}
    {/* <HookCallbackRef /> */}

    {/* <RouterProvider router={routesBasic} /> */}
    {/* <RouterProvider router={routesLink} /> */}
    <HelmetProvider>
      <RouterProvider router={routesHandle} />
    </HelmetProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
