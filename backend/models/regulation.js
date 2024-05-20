import { Schema, model } from 'mongoose';

const documentSchema = new Schema({
  title: String,
  subtitles: [
    {
      subtitle: String,
      parts: [
        {
          name: String,
          authority: { type: String, required: false },
          source: { type: String, required: false },
          subparts: [
            {
              name: String,
              sections: [
                {
                  title: String,
                  content: String,
                  subsections: [
                    {
                      title: String,
                      text: String,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

const DocumentModel = model('Document', documentSchema);

export default DocumentModel;
