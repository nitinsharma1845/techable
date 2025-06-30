import { OutlineButton, BorderWrapper, FillButton,  } from "./components";
const App = () => {
  return (
    <div>
      <BorderWrapper background="bg-black" borderRadius="2px">
        <OutlineButton className="text-xl cursor-pointer" type="button">
          Outline Button
        </OutlineButton>
      </BorderWrapper>

      <FillButton type="button" className="rounded my-8">
        Fill Button
      </FillButton>
    </div>
  );
};

export default App;
