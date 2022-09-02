import dummy from "./res/dummy.json";
import dummyWithoutParent from "./res/dummyWithoutParent.json";
import { EventEmitter } from "node:events";
import * as fs from "fs-extra";
import * as path from "path";
import { uuid } from "uuidv4";

type Dummy = typeof dummy;
type RawTreeNodes = Dummy["data"];

namespace ProcessInformation {
  export const OUTPUT_FOLDER = path.join(__dirname, "..", "output");
}

class App extends EventEmitter {
  constructor() {
    super();
    this.start();
  }

  start() {
    this.clear();
    this.on("export", this.parseJson);
  }

  clear() {
    if (fs.pathExistsSync(ProcessInformation.OUTPUT_FOLDER)) {
      fs.removeSync(ProcessInformation.OUTPUT_FOLDER);
    }
  }

  parseJson(dummy: Dummy) {
    const { data } = dummy;

    const tree = this.makeTree(data);

    if (!fs.existsSync(ProcessInformation.OUTPUT_FOLDER)) {
      fs.mkdirSync(ProcessInformation.OUTPUT_FOLDER);
    }

    fs.writeFileSync(
      path.join(
        ProcessInformation.OUTPUT_FOLDER,
        `tree-${uuid().slice(0, 8)}.json`
      ),
      JSON.stringify(tree, null, 4)
    );
  }

  makeTree(data: RawTreeNodes) {
    const tree = [];
    const map = new Map();
    data.forEach((node) =>
      map.set(node.departmentName, { ...node, children: [] })
    );

    const collection: IterableIterator<RawTreeNodes[number]> = map.values();

    for (const node of collection) {
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
app.emit("export", dummy);
app.emit("export", dummyWithoutParent);
