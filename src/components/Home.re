open Helpers;

let component = ReasonReact.statelessComponent("Home");

let make = (~posts) => {
  ...component,
  render: _self =>
    <div>
      <Head>
        <title> ("Hello world" |> text) </title>
        <meta name="description" content="Everything is awesome!" />
      </Head>
      <h1> ("Home" |> text) </h1>
    </div>,
};

let jsComponent =
  ReasonReact.wrapReasonForJs(~component, jsProps =>
    make(~posts=PhenomicPresetReactApp.jsEdge(jsProps##posts))
  );
