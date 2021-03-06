"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Stack = function() {
    function Stack() {
        _classCallCheck(this, Stack);
        this.vertices = [];
    }
    _createClass(Stack, [
        {
            key: "pop",
            value: function pop() {
                var vertex = this.vertices.pop(), stacked = false;
                vertex.setStacked(stacked);
                return vertex;
            }
        },
        {
            key: "push",
            value: function push(vertex) {
                var stacked = true;
                vertex.setStacked(stacked);
                this.vertices.push(vertex);
            }
        }
    ]);
    return Stack;
}();
exports.default = Stack;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ncmFwaC9zdGFjay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhY2sge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZlcnRpY2VzID0gW107XG4gIH1cbiAgXG4gIHBvcCgpIHtcbiAgICBjb25zdCB2ZXJ0ZXggPSB0aGlzLnZlcnRpY2VzLnBvcCgpLFxuICAgICAgICAgIHN0YWNrZWQgPSBmYWxzZTtcbiAgICBcbiAgICB2ZXJ0ZXguc2V0U3RhY2tlZChzdGFja2VkKTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG4gIFxuICBwdXNoKHZlcnRleCkge1xuICAgIGNvbnN0IHN0YWNrZWQgPSB0cnVlO1xuICAgIFxuICAgIHZlcnRleC5zZXRTdGFja2VkKHN0YWNrZWQpO1xuICAgIFxuICAgIHRoaXMudmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRUEsS0FBQTthQUFBLEtBQUE7OEJBQUEsS0FBQTthQUVBLFFBQUE7O2lCQUZBLEtBQUE7O0FBS0EsZUFBQSxHQUFBLEdBQUE7NEJBQUEsR0FBQTtvQkFDQSxNQUFBLFFBQUEsUUFBQSxDQUFBLEdBQUEsSUFDQSxPQUFBLEdBQUEsS0FBQTtBQUVBLHNCQUFBLENBQUEsVUFBQSxDQUFBLE9BQUE7dUJBRUEsTUFBQTs7OztBQUdBLGVBQUEsR0FBQSxJQUFBOzRCQUFBLElBQUEsQ0FBQSxNQUFBO29CQUNBLE9BQUEsR0FBQSxJQUFBO0FBRUEsc0JBQUEsQ0FBQSxVQUFBLENBQUEsT0FBQTtxQkFFQSxRQUFBLENBQUEsSUFBQSxDQUFBLE1BQUE7Ozs7V0FuQkEsS0FBQTs7a0JBQUEsS0FBQSJ9