import {
  getContacts,
  getContactById,
  addNewContact,
  updateContact,
  deleteContact,
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
    .post(addNewContact); //post endpoint

  app
    .route('/contact/:contactID')
    .get(getContactById) // get a specific contact
    .put(updateContact) // updating a specific contact
    .delete(deleteContact); // deleting a specific contact
};

export default routes;
