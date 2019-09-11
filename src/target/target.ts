/**
 * @file target.ts
 * @author Megumi
 * @module target
 */

export class Target {
  public readonly classNames: Array<string>;
  private host: string;

  /**
   * @param host
   * @param className
   */
  constructor (host: string, classNames: Array<string>) {
    this.host = host;
    this.classNames = classNames;
  }

  /**
   * 対象HOSTか
   * @return 対象か
   */
  public isTargetHost (): boolean {
    return location.host === this.host;
  }
}

/**
 * クライアント側に返してOKのソケットエラー
 */
export const TargetList = Object.freeze([
  new Target("www.youtube.com", [
    "ytp-ad-overlay-close-container",
    "ytp-ad-skip-button-container"
  ])
]);
