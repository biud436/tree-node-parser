import dummy from "./res/dummy.json";
import { EventEmitter } from "node:events";
import * as fs from "fs";
import * as path from "path";

type Dummy = typeof dummy;

class App extends EventEmitter {
  constructor() {
    super();
    this.start();
  }

  start() {
    this.on("ready", this.parseJson);
  }

  parseJson(dummy: Dummy) {
    const { data } = dummy;

    const tree = this.makeTree(data);

    const OUTPUT = path.join(__dirname, "..", "output");

    if (!fs.existsSync(OUTPUT)) {
      fs.mkdirSync(OUTPUT);
    }

    fs.writeFileSync(
      path.join(OUTPUT, "tree.json"),
      JSON.stringify(tree, null, 4)
    );
  }

  makeTree(data: Dummy["data"]) {
    const tree = [];
    const map = new Map();
    data.forEach((node) =>
      map.set(node.departmentName, { ...node, children: [] })
    );
    for (const node of map.values()) {
      if (node.parentDepartment) {
        map.get(node.parentDepartment).children.push(node);
      } else {
        tree.push(node);
      }
    }
    return tree;
  }
}

const app = new App();
app.emit("ready", dummy);
