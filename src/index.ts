/**
 * @file index.ts
 * @author Megumi
 */

import { AdSkip } from "./adskip";
import { Target, TargetList } from "./target";

TargetList.map((target: Target): void => {
  if (!target.isTargetHost()) {
    return;
  }

  target.classNames.map((className: string): void => {
    const adSkip: AdSkip = new AdSkip(className);
    adSkip.setSkipEvent();
  });
});
