import { Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode } from "@chakra-ui/react";

const ToggleColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return <Button className="!top-4 !right-4 !fixed " onClick={() => toggleColorMode()} >{colorMode == 'dark' ? <SunIcon color={"orange.400"} /> : <MoonIcon color={"blue.600"} />}</Button>

}

export default ToggleColorMode;