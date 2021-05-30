import React from "react";
import "./textFieldStyle.css";

export class TextField extends React.Component {

    render() {
        return (
            <div id={"container"}>
                <div id={"field-container"}>
                    <p id={"field"}>{this.props.field ? this.props.field : ""}</p>
                </div>
                <div id={"input-container"} autoCapitalize={this.props.isCaps}>
                    <input id={this.props.id}
                           className={"input"}
                           placeholder={this.props.placeholder}
                           autoFocus={this.props.isFocused}
                           maxLength={this.props.maxLength}
                           onChange={() => this.props.onChange}
                           onKeyPress={() => this.props.onPress}
                    />
                </div>
            </div>
        );
    }
}
