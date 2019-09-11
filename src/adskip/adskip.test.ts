/**
 *  * @file session.test.ts
 *   * @author Matsunaga
 *    * @module socket
 *     */
// tslint:disable

import { expect } from "chai";
import { stub } from "sinon";

import AdSkip from "./adskip";

window.MutationObserver = class {
  private callBack: any;
  private interval: any;

  constructor(callBack: any) {
    this.callBack = callBack;
  }

  observe(element: any, options: any): any {
    const oldHtml: any = element.innerHTML;
    setTimeout((): any => {
      if (element.innerHTML === oldHtml) return;
      this.callBack(["" as any]);
    }, 100);
  }

  disconnect(): any {
    return window.clearInterval(this.interval);
  }

  takeRecords(): any {}
};

describe("AdSkip::class", () => {
  const className = "unit-test";
  let ObserverDisconnectStub: any;

  beforeEach(() => {
    document.body.innerHTML = `<html><head></head><body>test</body></html>`;
    ObserverDisconnectStub = stub(MutationObserver.prototype, 'disconnect');
  });

  afterEach(() => ObserverDisconnectStub.restore());

  it("should click on the specified class name.", done => {
    try {
      const adSkip = new AdSkip(className);
      adSkip.setSkipEvent();

      document.addEventListener("click", (e: any): void => {
        expect(e.target.getAttribute("class")).to.equal(className);
        done();
      });
      const div: HTMLInputElement = document.createElement(
        "div"
      ) as HTMLInputElement;
      div.setAttribute("class", className);
      document.body.append(div);
    } catch (error) {
      done(error);
    }
  });

  it("should remove skip event.", done => {
    try {
      const adSkip = new AdSkip(className);
      adSkip.removeSkipEvent();
      expect(ObserverDisconnectStub.calledOnce).to.be.true;
      done();

    } catch (error) {
      done(error);
    }
  });
});
