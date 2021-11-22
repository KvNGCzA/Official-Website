import React, { ReactElement } from "react";
import { AvalancheIcon, BinanceIcon, EthereumIcon, FantomIcon, PolygonIcon } from "../../assets/Icons";
import Flex from "../../components/Flex";
import Spacing from "../../components/Spacing";
import Text from "../../components/Typography";

interface Props {
  label: string;
  icon: any;
}

const chainData = [
  { name: "Polygon", icon: PolygonIcon },
  { name: "Avalanche", icon: AvalancheIcon },
  { name: "BSC", icon: BinanceIcon },
  { name: "Ethereum", icon: EthereumIcon },
  { name: "Fantom", icon: FantomIcon },
];

export function ChainLabel({ label, icon: Icon }: Props): ReactElement {
  return (
    <Flex flexDirection="column" flexDirectionMd="row">
      <Spacing marginBottom="12px" marginBottomMd="0px" marginRightMd="12px">
        <Icon
          className="chain-label-icon"
        />
      </Spacing>
      <Text fontWeight={600} textAlignMd="center" color="#fff">
        {label}
      </Text>
    </Flex>
  );
}

export function HomeChainLabels(): ReactElement {
  return (
    <>
      {chainData.map((value, index) => (
        <Spacing key={index.toString()} marginBottomMd="40px" marginBottom="20px">
          <ChainLabel  icon={value.icon} label={value.name} />
        </Spacing>
      ))}
    </>
  );
}
