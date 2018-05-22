import React from "react";
import { ZenButton } from "../components/index.js";
import { usingAppContext } from "../providers/index.js";
import zens from "../consts/zens.js";
import { compose } from "recompose";
import { View, Environment, asset, NativeModules } from "react-360";
const { AudioModule } = NativeModules;

export default compose(
    usingAppContext
)(({ zenClicked }) => {
    return (
        <View>
        {
            zens.map((zen) => (
                <ZenButton
                    selectedZen={zen.id}
                    key={zen.id}
                    buttonClick={() => {
                        zenClicked(zen.id);
                    }}
                    text={zen.text}
                />
            ))
        }
    </View>
    )
})