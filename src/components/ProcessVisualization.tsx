export const ProcessVisualization = () => {
  return (
    <div className="relative h-full">
      <div className="space-y-16">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-smolder-muted rounded-lg flex items-center justify-center">
            <span className="text-smolder-accent">1</span>
          </div>
          <div>
            <h3 className="text-white font-medium">Imagine it and confirm</h3>
            <p className="text-smolder-text text-sm">Describe your vision in detail</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-smolder-muted rounded-lg flex items-center justify-center">
            <span className="text-smolder-accent">2</span>
          </div>
          <div>
            <h3 className="text-white font-medium">AI converts it into 3D</h3>
            <p className="text-smolder-text text-sm">Advanced AI processing</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-smolder-muted rounded-lg flex items-center justify-center">
            <span className="text-smolder-accent">3</span>
          </div>
          <div>
            <h3 className="text-white font-medium">3D object is then printed</h3>
            <p className="text-smolder-text text-sm">High-quality 3D printing</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-smolder-muted rounded-lg flex items-center justify-center">
            <span className="text-smolder-accent">4</span>
          </div>
          <div>
            <h3 className="text-white font-medium">3D print is delivered to you</h3>
            <p className="text-smolder-text text-sm">Fast and secure delivery</p>
          </div>
        </div>
      </div>
      
      <div className="absolute left-8 top-[80px] bottom-16 w-0.5 bg-smolder-border"></div>
    </div>
  );
};