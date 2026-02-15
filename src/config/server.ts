import express from 'express';
import cors from 'cors';
import { setupSwagger } from './swagger';
import { config } from './config';
import { connectMongo } from './db';
import adminCreateRoutes from '../features/admin/create/adminCreate.routes';

const app = express();

app.use(cors());
app.use(express.json());

connectMongo();

setupSwagger(app);

// Routes
app.use('/api/admin', adminCreateRoutes);

app.get('/', (req, res) => {
  res.redirect('/swagger');
});

app.listen(config.server.port, () => {
  console.log(`Server running at http://localhost:${config.server.port}`);
});
