import { Red, Node } from "node-red";
import { MessageHandler } from "../../message-handler/message-handler";

export function register(RED: Red) {
    const LowerCase = function(config: any) {
        const node: Node = this;
        RED.nodes.createNode(node, config);
    
        node.on('input', function(msg) {
            msg.payload = MessageHandler.lowerCase(msg.payload);
            node.send(msg);
        });
    }

    RED.nodes.registerType("lower-case", LowerCase);
}
