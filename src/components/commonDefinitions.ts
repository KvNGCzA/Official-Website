interface MouseEventDef {
  name: string;
  definition: any;
}

interface MobileScreenDef {
  screenSize: number;
  definition: any;
}

export interface CommonDefs {
  mouseEvents?: Array<MouseEventDef>;
  mobileScreensDefinitions?: Array<MobileScreenDef>;
  transform?: string;
}
