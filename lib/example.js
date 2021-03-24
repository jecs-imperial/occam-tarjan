"use strict";
var _index = require("./index");
var graph = _index.Graph.fromVertexLiterals([
    [
        "a",
        [
            "b",
            "c"
        ]
    ],
    [
        "b",
        [
            "b",
            "d"
        ]
    ],
    [
        "c",
        [
            "a"
        ]
    ],
    [
        "d",
        []
    ]
]);
var cycles = graph.getCycles(), vertices = graph.getVertices(), stronglyConnectedComponents = graph.getStronglyConnectedComponents();
debugger;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9leGFtcGxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBHcmFwaCB9IGZyb20gXCIuL2luZGV4XCI7ICAvLy9cblxuY29uc3QgZ3JhcGggPSBHcmFwaC5mcm9tVmVydGV4TGl0ZXJhbHMoW1xuXG4gIFtcImFcIiwgW1wiYlwiLCBcImNcIl1dLFxuICBbXCJiXCIsIFtcImJcIiwgXCJkXCJdXSxcbiAgW1wiY1wiLCBbXCJhXCJdXSxcbiAgW1wiZFwiLCBbXV1cblxuXSk7XG5cbmNvbnN0IGN5Y2xlcyA9IGdyYXBoLmdldEN5Y2xlcygpLFxuICAgICAgdmVydGljZXMgPSBncmFwaC5nZXRWZXJ0aWNlcygpLFxuICAgICAgc3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzID0gZ3JhcGguZ2V0U3Ryb25nbHlDb25uZWN0ZWRDb21wb25lbnRzKCk7XG5cbmRlYnVnZ2VyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7SUFFQSxNQUFBO0lBRUEsS0FBQSxHQUZBLE1BQUEsT0FFQSxrQkFBQTs7U0FFQSxDQUFBOzthQUFBLENBQUE7YUFBQSxDQUFBOzs7O1NBQ0EsQ0FBQTs7YUFBQSxDQUFBO2FBQUEsQ0FBQTs7OztTQUNBLENBQUE7O2FBQUEsQ0FBQTs7OztTQUNBLENBQUE7Ozs7SUFJQSxNQUFBLEdBQUEsS0FBQSxDQUFBLFNBQUEsSUFDQSxRQUFBLEdBQUEsS0FBQSxDQUFBLFdBQUEsSUFDQSwyQkFBQSxHQUFBLEtBQUEsQ0FBQSw4QkFBQSJ9