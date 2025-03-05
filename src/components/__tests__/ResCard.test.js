import { render, screen } from "@testing-library/react";
import ResCard from "../ResCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../components/mockData/resCardMock.json";


it("Should render reataurant card component with props data", () => {
    render(<ResCard resData={MOCK_DATA} />);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
})