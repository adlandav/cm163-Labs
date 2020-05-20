using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class moveUpNDown : MonoBehaviour
{
    //[SerializeField] float startPos;
    [SerializeField] float startPoint = 0;

    Vector3 moveVector;
    void Start()
    {
        moveVector = new Vector3(transform.position.x, transform.position.y, transform.position.z);
    }

    void Update()
    {
        DoverticalMovement();
    }

    void DoverticalMovement() {
        moveVector.y += (Mathf.Sin(startPoint) / 4) * Time.deltaTime;
        print(Mathf.Sin(startPoint));

        startPoint += 0.01f;

        if (startPoint >= 360) {
            startPoint = 0;
        }

        transform.position = moveVector;
    }
}
