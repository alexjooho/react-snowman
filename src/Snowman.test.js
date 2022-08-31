import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

it("matches snapshot", function () {
    const { container } = render(<Snowman
    />);
    expect(container).toMatchSnapshot();
});

it("renders without crashing", function () {
    // this is a low-value test, but better than nothing
    render(<Snowman
    />);
});


it("ends game after max wrong guesses", function () {
    const { container } = render(
        <Snowman words={['a']} maxWrong={1}
        />
    );

    const b = container.querySelector("#b");
    fireEvent.click(b);

    expect(
        container.querySelector('.end-game')
    ).toBeInTheDocument();
    expect(
        container.querySelector('.Buttons')
    ).not.toBeInTheDocument();
});

it("changes image after wrong guess", function () {
    const { container, debug } = render(
        <Snowman words={['a']}
        />
    );

    const b = container.querySelector("#b");
    fireEvent.click(b);

    const img = container.querySelector("img");

    expect(img.getAttribute("alt")).toEqual("1")
    expect(img.getAttribute("src")).toEqual("1.png")  // react automatically renders this into actual source in browser
});

it("does not change image after correct guess", function () {
    const { container, debug } = render(
        <Snowman words={['ab']}
        />
    );

    const b = container.querySelector("#b");
    fireEvent.click(b);

    debug()

    const img = container.querySelector("img");

    expect(img.getAttribute("alt")).toEqual("0")
    expect(img.getAttribute("src")).toEqual("0.png")
});