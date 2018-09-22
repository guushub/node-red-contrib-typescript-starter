import { Red, Node } from "node-red";
import { MessageHandler } from "../../message-handler/message-handler";

export function register(RED: Red) {
    const UpperCase = function(config: any) {
        const node: Node = this;
        RED.nodes.createNode(node, config);
    
        node.on('input', function(msg) {
            msg.payload = MessageHandler.upperCase(msg.payload);
            node.send(msg);
        });
    }

    RED.nodes.registerType("upper-case", UpperCase);
}
