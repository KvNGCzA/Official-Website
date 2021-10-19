import React, { ReactElement } from "react";
import { AvalancheIcon, BinanceIcon, EthereumIcon, FantomIcon, PolygonIcon } from "../../assets/Icons";
import Flex from "../../components/Flex";
import Text from "../../components/Typography";

interface Props {
  label: string;
  icon: any;
}

const chainData = [
  { name: "Polygon", icon: PolygonIcon },
  { name: "Avalanche", icon: AvalancheIcon },
  { name: "Binance Smart Chain", icon: BinanceIcon },
  { name: "Ethereum", icon: EthereumIcon },
  { name: "Fantom", icon: FantomIcon },
];

export function ChainLabel({ label, icon: Icon }: Props): ReactElement {
  return (
    <Flex flexDirection="column">
      <Icon />
      <Text fontWeight={600} textAlignMd="center" fontFamily="Inter" color="#fff" mt="12px" mb="20px">
        {label}
      </Text>
    </Flex>
  );
}

export function HomeChainLabels(): ReactElement {
  return (
    <>
      {chainData.map((value, index) => (
        <ChainLabel key={index.toString()} icon={value.icon} label={value.name} />
      ))}
    </>
  );
}
