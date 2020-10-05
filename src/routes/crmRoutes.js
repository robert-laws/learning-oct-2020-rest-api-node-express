import {
  getContacts,
  getContactById,
  addNewContact,
  updateContact,
} from '../controllers/crmController';

const routes = (app) => {
  app
    .route('/contact')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)
    .post(addNewContact);

  app
    .route('/contact/:contactID')
    .get(getContactById)
    .put(updateContact)
    .delete((req, res) => res.send('DELETE request successful!'));
};

export default routes;
