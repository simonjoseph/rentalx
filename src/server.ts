import express from 'express';
import { categoriesRoutes } from './routes/Categories.routes';
import { specificationsRoutes } from './routes/Specifications.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationsRoutes);

app.listen(3333, () => console.log('Server is running on port 3333 🚀🚀🚀✅'));
