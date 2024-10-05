import { Query } from 'node-appwrite';
import {sdk, client, databases} from './appwrite.connect';

const getAllDocuments = async(collectionId) =>{

    try {
        
        const response = await databases.listDocuments(
            process.env.APPWRITE_DB_ID, collectionId
        );
        return {success:true, response};

    } catch (err) {
        return { success: false, error: err.message };
    }

}
const findDocument = async(collectionId, attribute, value) =>{

    try {
        
        const response = await databases.listDocuments(
            process.env.APPWRITE_DB_ID, collectionId, [
            Query.equal(attribute, [value])
        ]);
        return {success:true, response};

    } catch (err) {
        return { success: false, error: err.message };
    }

}

const findDocumentByMultipleAttributes = async (collectionId, attributes) => {
    try {
        // Construct the query array
        const queries = attributes.map(attribute => {
            return Query.equal(attribute.name, attribute.value);
        });

        // Perform the search
        const response = await databases.listDocuments(
            process.env.APPWRITE_DB_ID, collectionId, queries
        );
        return {success:true, response};

    } catch (err) {
        return { success: false, error: err.message };
    }
}


const createDocument = async(collectionId, userData) =>{

    try {
        
        const response = await databases.createDocument(
            process.env.APPWRITE_DB_ID, collectionId, sdk.ID.unique(), userData
        );
        return {success:true, response};

    } catch (err) {
        return { success: false, error: err.message };
    }

}

const deleteDocument = async(collectionId, documentId) => {

    try {
        
        const response = await databases.deleteDocument(
            process.env.APPWRITE_DB_ID, collectionId, documentId
        );
        return {success:true, response};

    } catch (err) {
        return { success: false, error: err.message };
    }

}

const deleteMultipleDocuments = async (collectionId, attributes) => {

    try {

        const documents = await findDocumentByMultipleAttributes(collectionId, attributes);
        
        for (const document of documents) {
            deleteDocument(collectionId, document.$id);
        }
        return {success:true, response};

    } catch (err) {
        console.log(err);
        return { success: false, error: err.message };
    }
};

const updateSingleDocument = async(collectionId, documentId, updates) => {

    try {
        
        const response = await databases.updateDocument(
            process.env.APPWRITE_DB_ID, collectionId, documentId,updates
        );
        return {success:true, response};

    } catch (err) {
        return { success: false, error: err.message };
    }

}

const updateMultipleDocuments = async (collectionId, attributes, updates) => {

    try {

        const documents = await findDocumentByMultipleAttributes(collectionId, attributes);
        
        for (const document of documents) {
            updateSingleDocument(collectionId, document.$id, updates);
        }
        return {success:true, response};

    } catch (err) {
        console.log(err);
        return { success: false, error: err.message };
    }
};

export { getAllDocuments, findDocument, findDocumentByMultipleAttributes, createDocument, deleteDocument, deleteMultipleDocuments, updateSingleDocument, updateMultipleDocuments }