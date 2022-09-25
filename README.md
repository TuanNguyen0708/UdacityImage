# UdacityImage

Project by Udacity
## Getting Started
- Install: ```npm install```
- Build: ```npx tsc```
- Lint: ```npm run lint```
- Run unit tests: ```npm run test```
- Start server: ```npm run start```

Installs required dependencies.

### npm start
Runs the app and can be viewed at [http://localhost:9000]
- http://localhost:9000/api/image?filename=city&width=400&height=400
- http://localhost:9000/api/image?filename=city&width=400&height=400
- http://localhost:9000/api/image?image?filename=city&width=0&height=400
- http://localhost:9000/api/image?image?filename=city&width=400&height=0

### npm test
Spec files are created for components.

#### Project Structure
- [*] src/utils.imageFile.ts [*], ImageFile = async (fileName: string, width: number, height: number): Promise<string>

