interface MouseEventDef {
  name: string;
  definition: any;
}

interface WideScreenDef {
  screenSize: number;
  definition: any;
}

export interface CommonDefs {
  mouseEvents?: Array<MouseEventDef>;
  wideScreensDefinitions?: Array<WideScreenDef>;
  transform?: string;
}
