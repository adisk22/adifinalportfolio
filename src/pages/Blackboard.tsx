import { useEffect, useRef, useState } from "react";
import { Canvas as FabricCanvas, Circle, Rect, PencilBrush } from "fabric";
import { Palette, Square, Circle as CircleIcon, Pen, Eraser, RotateCcw } from "lucide-react";

const Blackboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const [activeColor, setActiveColor] = useState("#00ffff");
  const [activeTool, setActiveTool] = useState<"draw" | "rectangle" | "circle" | "eraser">("draw");
  const [brushSize, setBrushSize] = useState(3);

  const colors = ["#00ffff", "#ff0040", "#ffffff", "#ffff00", "#00ff00", "#ff8000"];

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: window.innerWidth - 100,
      height: window.innerHeight - 200,
      backgroundColor: "#000000",
    });

    // Create and initialize the freeDrawingBrush properly
    canvas.freeDrawingBrush = new PencilBrush(canvas);
    canvas.freeDrawingBrush.color = activeColor;
    canvas.freeDrawingBrush.width = brushSize;
    canvas.isDrawingMode = true;

    setFabricCanvas(canvas);

    const handleResize = () => {
      canvas.setWidth(window.innerWidth - 100);
      canvas.setHeight(window.innerHeight - 200);
      canvas.renderAll();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (!fabricCanvas || !fabricCanvas.freeDrawingBrush) return;

    if (activeTool === "eraser") {
      fabricCanvas.freeDrawingBrush.color = "#000000";
      fabricCanvas.isDrawingMode = true;
    } else if (activeTool === "draw") {
      fabricCanvas.freeDrawingBrush.color = activeColor;
      fabricCanvas.isDrawingMode = true;
    } else {
      fabricCanvas.isDrawingMode = false;
    }

    fabricCanvas.freeDrawingBrush.width = brushSize;
  }, [activeTool, activeColor, brushSize, fabricCanvas]);

  const handleToolClick = (tool: typeof activeTool) => {
    setActiveTool(tool);

    if (tool === "rectangle") {
      const rect = new Rect({
        left: 100,
        top: 100,
        fill: "transparent",
        stroke: activeColor,
        strokeWidth: 2,
        width: 100,
        height: 60,
      });
      fabricCanvas?.add(rect);
    } else if (tool === "circle") {
      const circle = new Circle({
        left: 100,
        top: 100,
        fill: "transparent",
        stroke: activeColor,
        strokeWidth: 2,
        radius: 50,
      });
      fabricCanvas?.add(circle);
    }
  };

  const handleClear = () => {
    if (!fabricCanvas) return;
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = "#000000";
    fabricCanvas.renderAll();
  };

  return (
    <div className="min-h-screen bg-cyber-black p-4">
      <div className="container mx-auto">
        <div className="mb-6">
          <h1 className="font-orbitron text-4xl glow-neon-blue mb-4">Adis Blackboard</h1>
          <p className="font-space text-gray-400">
            Have fun
          </p>
        </div>

        {/* Toolbar */}
        <div className="mb-4 flex flex-wrap items-center gap-4 p-4 bg-cyber-dark border border-glow-blue rounded-lg">
          {/* Tools */}
          <div className="flex gap-2">
            <button
              onClick={() => handleToolClick("draw")}
              className={`p-2 border-2 rounded transition-all ${
                activeTool === "draw"
                  ? "border-neon-blue glow-neon-blue text-neon-blue"
                  : "border-gray-600 text-gray-400 hover:border-neon-blue"
              }`}
            >
              <Pen className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleToolClick("rectangle")}
              className={`p-2 border-2 rounded transition-all ${
                activeTool === "rectangle"
                  ? "border-neon-blue glow-neon-blue text-neon-blue"
                  : "border-gray-600 text-gray-400 hover:border-neon-blue"
              }`}
            >
              <Square className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleToolClick("circle")}
              className={`p-2 border-2 rounded transition-all ${
                activeTool === "circle"
                  ? "border-neon-blue glow-neon-blue text-neon-blue"
                  : "border-gray-600 text-gray-400 hover:border-neon-blue"
              }`}
            >
              <CircleIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleToolClick("eraser")}
              className={`p-2 border-2 rounded transition-all ${
                activeTool === "eraser"
                  ? "border-neon-red glow-neon-red text-neon-red"
                  : "border-gray-600 text-gray-400 hover:border-neon-red"
              }`}
            >
              <Eraser className="w-5 h-5" />
            </button>
          </div>

          {/* Colors */}
          <div className="flex items-center gap-2">
            <Palette className="w-5 h-5 text-gray-400" />
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setActiveColor(color)}
                className={`w-8 h-8 rounded border-2 transition-all ${
                  activeColor === color ? "border-white scale-110" : "border-gray-600"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Brush Size */}
          <div className="flex items-center gap-2">
            <span className="text-gray-400 font-space text-sm">Size:</span>
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              className="w-24"
            />
            <span className="text-neon-blue font-space text-sm">{brushSize}px</span>
          </div>

          {/* Clear */}
          <button
            onClick={handleClear}
            className="p-2 border-2 border-neon-red text-neon-red rounded transition-all hover:bg-neon-red hover:text-black"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Canvas */}
        <div className="border-2 border-glow-blue rounded-lg overflow-hidden">
          <canvas ref={canvasRef} className="block" />
        </div>
      </div>
    </div>
  );
};

export default Blackboard;
