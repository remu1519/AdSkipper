/**
 * @file index.ts
 * @author Megumi
 * @module adskip
 */

export default class AdSkip {
  private className: string;
  private observer: MutationObserver;

  /**
   * @param className
   */
  constructor (className: string) {
    this.className = className;
    this.observer = new MutationObserver(
      (mutation: Array<MutationRecord>): void => this.skip()
    );
  }

  /**
   * 広告をスキップ
   */
  public skip (): void {
    document
      .querySelectorAll(`.${this.className}`)
      .forEach((elem: Element): void => (elem as HTMLInputElement).click());
  }

  /**
   * イベントをセット
   */
  public setSkipEvent (): void {
    const option = { childList: true, subtree: true };
    this.observer.observe(document.body, option);
  }

  /**
   * イベントを削除
   */
  public removeSkipEvent (): void {
    this.observer.disconnect();
  }
}
