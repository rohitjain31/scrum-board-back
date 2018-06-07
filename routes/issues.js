var express = require('express');
var router = express.Router();
var Issues = require('./../models/issue');

// Get All Issue list
router.get('/getAllIssue', (req, res) => {
    Issues.find()
        .then((issues) => {
            res.json({
                error: false,
                issues: issues
            });
        })
        .catch((e) => {
            res.json({
                error: true
            });
        });
});

// Get Individual issue detail
router.post('/getIssue', (req, res) => {
    var issueId = req.body.id || '';
    Issues.findById({ _id: issueId })
        .then((issue) => {
            res.json({
                error: false,
                issue: issue
            });
        })
        .catch((e) => {
            res.json({
                error: true
            });
        });
});

// Create an issue and save it to DB
router.post('/create', (req, res) => {
    var tempIssue = new Issues(req.body) || {};
    tempIssue.save()
        .then((issue) => {
            res.json({
                error: false,
                issue: issue
            });
        })
        .catch((e) => {
            res.json({
                error: true
            });
        });
});

// update an issue and save it to DB
router.put('/update', (req, res) => {
    Issues.findByIdAndUpdate({ _id: req.body.id }, req.body, { new: true })
        .then((issue) => {
            res.json({
                error: false,
                issue: issue
            });
        })
        .catch((e) => {
            res.json({
                error: true
            });
        });

});

module.exports = router;
