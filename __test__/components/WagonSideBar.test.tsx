import * as React from "react";
import singletonRouter from "next/router";
import { render, fireEvent } from "@testing-library/react";
import WagonSideBar from "../../src/components/WagonSideBar";
import mockRouter from "next-router-mock";

jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("WagonSideBar component", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/initial");
  });

  it("it renders the deer image", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const deerImage = getByTestId("deer-image");
    expect(deerImage).toBeVisible();
  });

  it("it changes path when deer image clicked", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const deerImage = getByTestId("deer-image");
    fireEvent.click(deerImage);
    expect(singletonRouter).toMatchObject({ asPath: "/" });
  });

  it("it renders home page button & icon", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const homeButton = getByTestId("home-button");
    const homeIcon = getByTestId("home-icon");

    expect(homeButton).toBeVisible();
    expect(homeButton).toHaveAttribute("href", "/");
    expect(homeIcon).toBeVisible();
  });

  it("it changes path when home page button clicked", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const homeButton = getByTestId("home-button");
    fireEvent.click(homeButton);
    expect(singletonRouter).toMatchObject({ asPath: "/" });
  });

  it("it renders about page button & icon", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const aboutButton = getByTestId("about-button");
    const aboutIcon = getByTestId("about-icon");

    expect(aboutButton).toBeVisible();
    expect(aboutButton).toHaveAttribute("href", "/about");
    expect(aboutIcon).toBeVisible();
  });

  it("it changes path when about page button clicked", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const aboutButton = getByTestId("about-button");
    fireEvent.click(aboutButton);
    expect(singletonRouter).toMatchObject({ asPath: "/about" });
  });

  it("it renders skills page button & icon", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const skillsButton = getByTestId("skills-button");
    const skillsIcon = getByTestId("skills-icon");

    expect(skillsButton).toBeVisible();
    expect(skillsButton).toHaveAttribute("href", "/skills");
    expect(skillsIcon).toBeVisible();
  });

  it("it changes path when skills page button clicked", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const skillsButton = getByTestId("skills-button");
    fireEvent.click(skillsButton);
    expect(singletonRouter).toMatchObject({ asPath: "/skills" });
  });

  it("it renders contact page button & icon", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const contactButton = getByTestId("contact-button");
    const contactIcon = getByTestId("contact-icon");

    expect(contactButton).toBeVisible();
    expect(contactButton).toHaveAttribute("href", "/contact");
    expect(contactIcon).toBeVisible();
  });

  it("it changes path when contact page button clicked", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const contactButton = getByTestId("contact-button");
    fireEvent.click(contactButton);
    expect(singletonRouter).toMatchObject({ asPath: "/contact" });
  });

  it("it renders twitter button & icon", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const twitterButton = getByTestId("twitter-button");
    const twitterIcon = getByTestId("twitter-icon");

    expect(twitterButton).toBeVisible();
    expect(twitterButton).toHaveAttribute(
      "href",
      "https://twitter.com/metehanglc"
    );
    expect(twitterIcon).toBeVisible();
  });

  it("it renders github button & icon", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const githubButton = getByTestId("github-button");
    const githubIcon = getByTestId("github-icon");

    expect(githubButton).toBeVisible();
    expect(githubButton).toHaveAttribute("href", "https://github.com/mthnglac");
    expect(githubIcon).toBeVisible();
  });

  it("it renders linkedin button & icon", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const linkedinButton = getByTestId("linkedin-button");
    const linkedinIcon = getByTestId("linkedin-icon");

    expect(linkedinButton).toBeVisible();
    expect(linkedinButton).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/metehan-g%C3%BCla%C3%A7-02b337104/"
    );
    expect(linkedinIcon).toBeVisible();
  });

  it("it renders soundcloud button & icon", () => {
    const { getByTestId } = render(<WagonSideBar />);

    const soundcloudButton = getByTestId("soundcloud-button");
    const soundcloudIcon = getByTestId("soundcloud-icon");

    expect(soundcloudButton).toBeVisible();
    expect(soundcloudButton).toHaveAttribute(
      "href",
      "https://soundcloud.com/metehan-g-la"
    );
    expect(soundcloudIcon).toBeVisible();
  });
});
