import { Color, Column, Row, Spacing, Text } from "@atoms";
import { Image } from "react-native";

interface Props {
    icon: string;
    description: string;
    main: string;
    feels: number;
    temp: number;
} 

const Weather = (props: Props) => {
    const {
        main,
        icon,
        description,
        feels,
        temp
    } = props;
    return(
        <Column margin={{
        b:Spacing.Standard
        }} contentStyle='fitContent' alignment='center'>
            <Row contentStyle='fitContent' height={50}>
                <Image style={{
                width:40,
                height: 40,
                }} source={{
                uri: `https://openweathermap.org/img/w/${icon}.png`
                }} />
                <Column margin={{
                l: Spacing.SuperTiny
                }} contentStyle='fitContent'>
                <Text type="l1" weight="bold" color={Color.Neutral01}>{main || 'loading..'}</Text>
                <Text type="l1" color={Color.Neutral01}>{description || 'loading..'}</Text>
                </Column>
            </Row>
            <Text color={Color.Neutral01} weight='regular' type="h1">{temp || 0}°C</Text>
            <Text type="l1" color={Color.Neutral02}>Feels like {feels || 0}°C</Text>
        </Column>
    )
}

export default Weather;